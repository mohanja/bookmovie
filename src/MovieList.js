import { Crads } from "./Crads";


export function MovieList() {
  const movies = [
    {
      image: "https://cdn.zeebiz.com/sites/default/files/2023/01/16/221614-varisu-vijay.jpg",
      title: "Varisu",
      language: "Tamil",
      cretifict: "U"
    },
    {
      image: "https://th.bing.com/th?id=OIF.DD62LnFlgze9rR%2f6YlSCSA&pid=ImgDet&rs=1",
      title: "Thunivu",
      language: "Tamil",
      cretifict: "U/A"
    }
  ];
  return (
    <div className="list-mv">
      {movies.map((mv) => (<Crads movie={mv} />))}
    </div>
  );
}
