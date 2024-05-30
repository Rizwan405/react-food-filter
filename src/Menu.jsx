import Card from "./Card";
function Menu({ category, item }) {
  const filteredPosts =
    category === "all"
      ? item
      : item.filter((post) => post.category === category);
  return (
    <div className="Menu">
      {filteredPosts.map((item) => (
        <Card key={item.id} content={item} />
      ))}
    </div>
  );
}

export default Menu;
