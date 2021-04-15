
$(document).ready(function () {

  $(".form").on("submit", function (e) {
      e.preventDefault();

      const burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);
      $.ajax({
          method: "PUT",
          url: "/burgers/" + burger_id
      }).then(function (data) {
  
          location.reload();
      });

  });

  $(".delete").on("click", function(e) {
    e.preventDefault();

    const id = $(this).data("id");

    $.ajax({
        type: "DELETE",
        url: "/burgers/" + id
    }).then(location.reload());
});

}); 