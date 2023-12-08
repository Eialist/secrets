const HeaderComponent = () => {
  return (
    <div>
      <div style={{ height: "4em", backgroundColor: "white", width: "100%", boxShadow: "0px 0px 6px 1px #000", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/* <img src={aibg} alt="logo" style={{ padding: "10px"}}/> */}
        <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "10em", marginRight: "2em", fontFamily: "Montserrat, sans-serif", fontWeight: "300"}}>
                <li>Nav</li>
                <li>Nav</li>
                <li>Nav</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
