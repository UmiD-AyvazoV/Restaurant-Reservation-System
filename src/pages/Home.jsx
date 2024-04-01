import Room from "../components/Room";

const Home = () => {
  const rooms = [
    {
      id: 1,
      name: "Art Garden",
      img: "https://bakuguide.com/images/places/68/art-garden-3.jpg",
      telNumber: "+994 50 447 20 13",
      address: "11 Asaf Zeynalli, Icherisheher",
    },
    {
      id: 2,
      name: "Limu Forest",
      img: "https://static-blog.treebo.com/wp-content/uploads/2018/07/Peacock-Rooftop-Restaurant-740x492.jpg",
      telNumber: "+994 50 760 10 12",
      address: "Heydər Əliyev pr 167",
    },
    {
      id: 3,
      name: "Friends House",
      img: "https://cache.marriott.com/marriottassets/marriott/GYDJW/gydjw-kitchen-0056-hor-clsc.jpg",
      telNumber: "+994 12 437 97 87",
      address: "Sumgayit Hwy., 17km",
    },
    {
      id: 4,
      name: "Jasmine",
      img: "https://assets.avanihotels.com/image/upload/q_auto,f_auto/media/minor/avani/images/khon_kaen/eating/vkkc_ju_fang_teaser_1117x670.jpg",
      telNumber: "+994 50 361 54 04",
      address: "Bakıxanov küçəsi 24",
    },
    {
      id: 5,
      name: "Le Caramel Patisserie",
      img: "https://facesoman.com/wp-content/uploads/2019/08/Web-968-Street-Food-1-1.jpg",
      telNumber: "+994 77 331 23 45",
      address: "S. Askerova 80",
    },
  ];

  return (
    <div className="container">
      <div className="cards">
        {rooms.map((room) => {
          return (
            <div key={room.id} className="mt-2">
              <Room room={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;