var globalFilters = {};
const API = "https://api.spaceXdata.com/v3/launches";

$(document).ready(function () {
    function setLimit(limit) {
        globalFilters['limit'] = limit;
    }
    setLimit(100);
    getData();
    $('.option-wrapper .buttons button').on('click', function () {
        var $this = $(this);
        var filter = getfilterTypeAndValue($this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            removeFilter(filter[0]);
        } else {
            $('.active[data-filter="' + filter[0] + '"]').removeClass('active');
            $this.addClass('active');
            updateFilter(filter);
        }
    });

    $('#to-filters').on('click', function() {
        setTimeout(function() {
           $('.option-wrapper>h2').attr('tabindex', 0).focus().attr('tabindex', -1);
        }, 100);
    });

    $('#to-results').on('click', function() {
        setTimeout(function() {
           $('.prog-wrap:first .points-wrap h3').attr('tabindex', 0).focus().attr('tabindex', -1);
        }, 100);
    });
    $('.close-button').on('click', function() {
         $('.jump-links').slideUp();
    });
});

function updateFilter(filter) {
    globalFilters[filter[0]] = filter[1];
    getData();
}

function removeFilter(filter) {
    delete globalFilters[filter];
    getData();
}

function getfilterTypeAndValue(button) { //  get filter data from button
    var filters = [];
    filters.push(button[0].dataset.filter);
    filters.push(button[0].dataset.value);
    return filters;
}

function generateMissionIds(data){
    var ids = '';
    if(data){
        var len = data.length;
        for(var i=0;i<len;i++){
            ids = ids + `<li>${data[i]}</li>`;
        }
    }
    return ids;
}

function getMissionPatch(data){
    if(data && data.mission_patch_small){
        return data.mission_patch_small;
    }
    return '#';
}

function generateSingleFlightDetails(data) {
    var template = `
        <div class="col-lg-3 col-sm-3 col-sm-12 col-xs-12">
            <div class="prog-wrap animated fadeIn">
                <div class="img-wrap">
                    <img alt="" src="${getMissionPatch(data.links)}">
			 		</div>
                    <div class="points-wrap">
                        <h3 class="a11y-outline-none">${data.mission_name} ${"#"+ data.flight_number}</h3>
                        <p>Mission <span class="mission-ids">IDS</span>:</p>
                        <ul>
                            ${generateMissionIds(data.mission_id)}
                        </ul>
                        <p><strong>Launch Year:</strong> ${data.launch_year}</p>
                        <p><strong>Successful Launch:</strong> ${data.launch_success}</p>
                        <div class="success"><p class="left"><strong>Successsful Landing:</strong> Launch Landing</p>
                            <div class="clearfix"></div>
			 			</div>
                        </div>
                    </div>
                </div>
    `;
    return template;
}

function appendRowStart() {
    return `<div class="row">`;
}

function appendRowEnd() {
    return `</div>`;
}

function getData() {    
    const queryParams = $.param(globalFilters);
    const URL = API + "?" + queryParams;
    jQuery.ajax({
        url: URL,
        method: "GET",
        beforeSend: function (){
            $('.found-results').hide();
        },
        success: function (data) {
            console.log(data);
            if (data) {

                var len = data.length;
                console.log(len);
                var allData = '';
                for (var i = 0; i < len; i++) {
                    if (i === 0) {
                        allData = allData + appendRowStart();
                    }                    
                    allData = allData + generateSingleFlightDetails(data[i]);
                    if (i !== 0 && (i + 1) % 4 === 0) {
                        allData = allData + appendRowEnd() + appendRowStart();
                    }

                }
                allData = allData + appendRowEnd();
                $("#flight_results").html(allData);
                $('#number-found').html(len);
            }
        },
        complete: function (){
            $('.found-results').slideDown().attr('tabindex', 0).focus().attr('tabindex', -1);

            $(window).on('click', function(e) {
                $('.found-results, .jump-links').slideUp();
            })
            
            $('.found-results').on('keydown blur', function(e) {
                if(e.which === 9) {
                    $(this).slideUp();
                    $('.jump-links').slideDown();
                    setTimeout(function() {
                        $('.jump-links button.jump-link-btn:first').focus();
                    }, 10);
                }
            });
        }
    })

}
