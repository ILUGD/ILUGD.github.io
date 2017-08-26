function display_next_event(el) {
    // Display the next event available on meetup.com in the given html element.
    //
    // Usages:
    // Add the following html markup in you page where you want the event to show
    // <div class="section--next_event" data-meetup-url="<name-of-meetup-group-here>"></div>
    //
    // Call this function after the page has loaded.
    // <script> display_next_event('.section--next_event')</script>
    var captions = ["Let's meetup at: ", "Next event:", "Upcoming:", "Next up: "]
    var caption = captions[Math.floor(Math.random()*captions.length)],
        meetup_group = $(el).attr('data-meetup-group');
    var timeConverter = function(UNIX_timestamp){
      var a = new Date(UNIX_timestamp);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = date + ' ' + month + ' ' + year;
      return time;
    }
    console.log('https://api.meetup.com/'+meetup_group+'?photo-host=public&sig_id=230922245&only=next_event&sig=fc0267bcfbe5a31e01f52138451f0db0477a7412');
    $.ajax({
      url: 'https://api.meetup.com/'+meetup_group+'?photo-host=public&sig_id=230922245&only=next_event&sig=fc0267bcfbe5a31e01f52138451f0db0477a7412',
      jsonp: 'callback',
      dataType: 'jsonp',
      success: function( response ) {
        console.log(response)
          var next_event = response.data.next_event;
          // display only when there is an event.
          if (next_event){
            var event_title = next_event.name + ' (' + timeConverter(next_event.time) + ')';
            var event_url = 'http://www.meetup.com/'+meetup_group+'/events/' + next_event.id;
            var html = '<span class=caption>'+ caption +'</span><a target="_blank" href=' + event_url + '>' + event_title + '</a>';
            $(el).html(html).css({'opacity': 1});
          };
      }
    });
}