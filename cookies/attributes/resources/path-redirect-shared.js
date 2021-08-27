// Note: this function has a dependency on testdriver.js. Any test files calling
// it should include testdriver.js and testdriver-vendor.js
test_driver.set_test_context(window.top);
window.addEventListener("message", (e) => {
  if (e.data == "getAndExpireCookies") {
    const cookies = document.cookie;
    test_driver.delete_all_cookies().then(() => {
      e.source.postMessage({"getAndExpireCookies": cookies}, '*');
    });
  } else if (e.data == "expireCookies") {
    test_driver.delete_all_cookies().then(() => {
      e.source.postMessage({"expireCookies": ""}, '*');
    });
  }
});