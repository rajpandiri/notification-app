$( window ).ready(function() {
  connect();
});

function connect() {
  var socket = new SockJS('/websocket');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
      stompClient.subscribe('/topic/pushNotification_Raj', function (notification) {
          $('#textArea').val(notification);
       });
  });
}