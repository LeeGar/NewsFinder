var signinTwitter = () => {
  $(function () {
    $("#signintwitter").on("click", function () {
      console.log('????')
      window.location.href = "/request-token"
    });
  });
};

window.signinTwitter = signinTwitter;
