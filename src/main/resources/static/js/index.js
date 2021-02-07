$( window ).ready(function() {
  connect();
});

function connect() {
  var socket = new SockJS('/websocket');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
      stompClient.subscribe('/topic/pushNotification_ZK07LDU', function (notification) {
          $('#textArea').val(notification);
       });
  });
}