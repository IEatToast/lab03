function validate()
{
  let pw1 = document.getElementById('pw1');
  let pw2 = document.getElementById('pw2');
    if (pw1.value != pw2.value)
    {
      alert("passwords do not match");
    }
    if (pw1.value.length < 8 || pw2.value.length < 8)
    {
      alert("password is too short");
    }
}
