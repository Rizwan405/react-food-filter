function Header({ setCategory }) {
  return (
    <header className="header">
      <h1>Menu</h1>
      <div className="buttons">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("cakes")}>Cake</button>
        <button onClick={() => setCategory("pizza")}>Pizza</button>
        <button onClick={() => setCategory("coffee")}>Coffee</button>
      </div>
    </header>
  );
}

export default Header;
