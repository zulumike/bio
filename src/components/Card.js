import React from "react";

function Card() {

  function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

// const images = importAll(require.context('../img/work', false, '/\.jpg/'));
const images = importAll(require.context('../img/work', false, /\.(png|jpe?g|svg)$/));
console.log(images['image1.jpg']);

  return (
    <div>
        <h1>Bilder</h1>
        <button>Forrige</button>
        <img src={images['image1.jpg']} />
        <button>Neste</button>
    </div>
  );
}

export default Card