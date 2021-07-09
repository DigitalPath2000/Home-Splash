
document.write(
  `
  <div id="complete-registration">
  <h1>3. Complete registration</h1>

  <input class="form-control" type="text" name="username" id="username" placeholder="Username" required=""><br>
  <input class="form-control" type="text" name="password" id="password" placeholder="Password" required=""><br>
  <input class="form-control" type="text" name="re-enter-password" id="re-enter-password" placeholder="Re-enter Password" required=""><br>
  <div style="width:100%">
  <button data-dismiss="modal" type="submit" onclick="registration()" class="btn header-btn-sign ml-2" tabindex="0" style="font-family:'Rubik';font-weight:normal;font-size:24px;width:400px;">Join</button>
  </div>
</div>
`
);
