function Logout({doLogout}) {
  function HandleLogoutClick() {
    doLogout();
  }
  return (
    <>
      <button onClick={HandleLogoutClick}>logout</button>
    </>
  );
}
export default Logout;
