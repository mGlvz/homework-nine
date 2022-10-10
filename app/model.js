var MODEL = (function(){
    var _homeContent = `<div class="hero">
<div class="calloutContainer">
    <div class="callout">Nature & Travel Photography</div>
    <div class="myName">by Monica Galvez</div>
</div>
</div>
<div class="intro">
        <div class="info1"></div>
        <div class="info2"></div>
        <div class="info3"></div>
        <div class="info4"></div>
</div>
`;
    var _aboutContent = `<div class="about" id="about">
<div class="aboutContainer">
  <div class="aboutImage"></div>
  <div class="aboutContentContainer">
    <div class="aboutTitle">About</div>
    <div class="aboutContent">
      Hi! My name is Monica. This is a space I created to share photos of
      my adventures and wildlife observations. Ever since I was a child I
      have been in awe of nature and its beauty. My hope is to capture
      that beauty and share it with the world. I mainly travel solo and
      explore nationally protected wilderness areas. These are the most
      remote and untouched pieces of land available to the public. My
      areas of interest are insects, bioluminescence, macro photography,
      wilderness areas, reptiles, birds of prey, fungus & lichen, and cave
      ecosystems.
    </div>
  </div>
</div>
</div>`;
    var _mapContent = `<div class="map" id="map">
<div class="mapContentContainer">
  <div class="mapContent">
    <div class="words">
      This is the map I use to find the nearest wilderness areas. Please
      feel free to explore the map!
    </div>
  </div>
</div>
<iframe
  width="100%"
  height="650"
  frameborder="0"
  scrolling="no"
  allowfullscreen
  src="https://arcg.is/1K9L99"
></iframe>
</div>`;
    var _galleryContent = `<div class="hero">
<div class="calloutContainer">
  <div class="callout">Gallery of Observations</div>
  <div class="myName">Select a category bellow.</div>
</div>
</div>
<div class="galleryCategory">
<a href="#bugs">
  <div class="cat1"></div>
</a>
<a href="#mushrooms">
  <div class="cat2"></div>
</a>
<a href="#caves">
  <div class="cat3"></div>
</a>
<a href="#plants">
  <div class="cat4"></div>
</a>
</div>
<div class="bugs" id="bugs">
<div class="bugTitle">
  <div class="bugTitleText">Bugs</div>
</div>
<div class="bugContainer">
  <div class="bug1">
    <a
      href="images/bug.jpeg"
      data-lightbox="bug"
      data-title="Sachem Butterfly"
    >
      <img src="images/bug.jpeg" alt="" />
    </a>
  </div>
  <div class="bug2">
    <a
      href="images/bug2.jpeg"
      data-lightbox="bug"
      data-title="Mating Grasshoppers"
    >
      <img src="images/bug2.jpeg" alt="" />
    </a>
  </div>
  <div class="bug3">
    <a
      href="images/bug3.jpeg"
      data-lightbox="bug"
      data-title="Northern Eudelinia Moth"
    >
      <img src="images/bug3.jpeg" alt="" />
    </a>
  </div>
  <div class="bug4">
    <a
      href="images/bug4.jpeg"
      data-lightbox="bug"
      data-title="Centipede under blacklight"
    >
      <img src="images/bug4.jpeg" alt="" />
    </a>
  </div>
  <div class="bug5">
    <a
      href="images/bug5.png"
      data-lightbox="bug"
      data-title="Beech Blight Aphids"
    >
      <img src="images/bug5.png" alt="" />
    </a>
  </div>
  <div class="bug6">
    <a
      href="images/bug6.jpeg"
      data-lightbox="bug"
      data-title="Golden Silk Spider"
    >
      <img src="images/bug6.jpeg" alt="" />
    </a>
  </div>
  <div class="bug7">
    <a
      href="images/bug7.png"
      data-lightbox="bug"
      data-title="Thread-waisted Wasp"
    >
      <img src="images/bug7.png" alt="" />
    </a>
  </div>
  <div class="bug8">
    <a
      href="images/bug8.png"
      data-lightbox="bug"
      data-title="Monarch Butterfly"
    >
      <img src="images/bug8.png" alt="" />
    </a>
  </div>
  <div class="bug9">
    <a
      href="images/bug9.jpeg"
      data-lightbox="bug"
      data-title="Royal Walnut Moth"
    >
      <img src="images/bug9.jpeg" alt="" />
    </a>
  </div>
  <div class="bug10">
    <a
      href="images/bug10.PNG"
      data-lightbox="bug"
      data-title="Crowned Slug Caterpiller"
    >
      <img src="images/bug10.PNG" alt="" />
    </a>
  </div>
</div>
</div>
<div class="mushrooms" id="mushrooms">
<div class="mushroomTitle">
  <div class="mushroomTitleText">Mushrooms</div>
</div>
<div class="mushroomContainer">
  <div class="mushroom1">
    <a
      href="images/mushrooms1.PNG"
      data-lightbox="shroom"
      data-title="Orange Mycena"
    >
      <img src="images/mushrooms1.PNG" alt="" />
    </a>
  </div>
  <div class="mushroom2">
    <a
      href="images/mushroom2.jpeg"
      data-lightbox="shroom"
      data-title="Red Russula"
    >
      <img src="images/mushroom2.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom3">
    <a
      href="images/mushroom3.jpeg"
      data-lightbox="shroom"
      data-title="Bleeding Fairy Helmets"
    >
      <img src="images/mushroom3.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom4">
    <a
      href="images/mushroom4.jpeg"
      data-lightbox="shroom"
      data-title="Viscid Violet Cort"
    >
      <img src="images/mushroom4.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom5">
    <a
      href="images/mushroom5.jpeg"
      data-lightbox="shroom"
      data-title="Unkown Mushroom"
    >
      <img src="images/mushroom5.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom6">
    <a
      href="images/mushroom6.jpeg"
      data-lightbox="shroom"
      data-title="Parasol Mushroom"
    >
      <img src="images/mushroom6.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom7">
    <a
      href="images/mushroom7.jpeg"
      data-lightbox="shroom"
      data-title="Viscid Violet Cort"
    >
      <img src="images/mushroom7.jpeg" alt="" />
    </a>
  </div>
  <div class="mushroom8">
    <a
      href="images/mushroom8.png"
      data-lightbox="shroom"
      data-title="Young Violet Cort"
    >
      <img src="images/mushroom8.png" alt="" />
    </a>
  </div>
  <div class="mushroom9">
    <a
      href="images/mushroom9.png"
      data-lightbox="shroom"
      data-title="Misc Foraged Mushrooms"
    >
      <img src="images/mushroom9.png" alt="" />
    </a>
  </div>
  <div class="mushroom10">
    <a
      href="images/mushroom10.png"
      data-lightbox="shroom"
      data-title="Reshi"
    >
      <img src="images/mushroom10.png" alt="" />
    </a>
  </div>
</div>
</div>
<div class="caves" id="caves">
<div class="caveTitle">
  <div class="caveTitleText">Caves</div>
</div>
<div class="caveContainer">
  <div class="cave1">
    <a
      href="images/cave1.jpeg"
      data-lightbox="cave"
      data-title="Beginning of a cave crawl"
    >
      <img src="images/cave1.jpeg" alt="" />
    </a>
  </div>
  <div class="cave2">
    <a
      href="images/cave2.png"
      data-lightbox="cave"
      data-title="Northern Slimy Salamander"
    >
      <img src="images/cave2.png" alt="" />
    </a>
  </div>
  <div class="cave3">
    <a
      href="images/cave3.png"
      data-lightbox="cave"
      data-title="Cave pool and rope climb"
    >
      <img src="images/cave3.png" alt="" />
    </a>
  </div>
  <div class="cave4">
    <a
      href="images/cave4.png"
      data-lightbox="cave"
      data-title="Entrance to Patton Cave"
    >
      <img src="images/cave4.png" alt="" />
    </a>
  </div>
  <div class="cave5">
    <a
      href="images/cave5.png"
      data-lightbox="cave"
      data-title="Hanging out after a crawl"
    >
      <img src="images/cave5.png" alt="" />
    </a>
  </div>
  <div class="cave6">
    <a
      href="images/cave6.png"
      data-lightbox="cave"
      data-title="Wild cave entrance"
    >
      <img src="images/cave6.png" alt="" />
    </a>
  </div>
  <div class="cave7">
    <a
      href="images/cave7.png"
      data-lightbox="cave"
      data-title="Patton Cave"
    >
      <img src="images/cave7.png" alt="" />
    </a>
  </div>
  <div class="cave8">
    <a
      href="images/cave8.png"
      data-lightbox="cave"
      data-title="Deputy Springs Cave"
    >
      <img src="images/cave8.png" alt="" />
    </a>
  </div>
  <div class="cave9">
    <a
      href="images/cave9.png"
      data-lightbox="cave"
      data-title="Cave buddy and pool"
    >
      <img src="images/cave9.png" alt="" />
    </a>
  </div>
  <div class="cave10">
    <a
      href="images/cave10.png"
      data-lightbox="cave"
      data-title="Deputy Springs Cave"
    >
      <img src="images/cave10.png" alt="" />
    </a>
  </div>
</div>
</div>
<div class="plants" id="plants">
<div class="plantTitle">
  <div class="plantTitleText">Plants</div>
</div>
<div class="plantContainer">
  <div class="plant1">
    <a
      href="images/plants1.PNG"
      data-lightbox="plant"
      data-title="Spotted Touch-me-not"
    >
      <img src="images/plants1.PNG" alt="" />
    </a>
  </div>
  <div class="plant2">
    <a
      href="images/plant2.jpeg"
      data-lightbox="plant"
      data-title="Beach Morning Glory"
    >
      <img src="images/plant2.jpeg" alt="" />
    </a>
  </div>
  <div class="plant3">
    <a
      href="images/dunePlants.jpeg"
      data-lightbox="plant"
      data-title="Bearberry"
    >
      <img src="images/dunePlants.jpeg" alt="" />
    </a>
  </div>
  <div class="plant4">
    <a
      href="images/plant4.png"
      data-lightbox="plant"
      data-title="Purple Fringeless Orchid"
    >
      <img src="images/plant4.png" alt="" />
    </a>
  </div>
  <div class="plant5">
    <a
      href="images/plant5.png"
      data-lightbox="plant"
      data-title="Sensitive Fern"
    >
      <img src="images/plant5.png" alt="" />
    </a>
  </div>
  <div class="plant6">
    <a
      href="images/plant6.png"
      data-lightbox="plant"
      data-title="Black Eyed Susans"
    >
      <img src="images/plant6.png" alt="" />
    </a>
  </div>
  <div class="plant7">
    <a
      href="images/plant7.png"
      data-lightbox="plant"
      data-title="Fern and Reshi"
    >
      <img src="images/plant7.png" alt="" />
    </a>
  </div>
  <div class="plant8">
    <a
      href="images/plant8.png"
      data-lightbox="plant"
      data-title="Chicory"
    >
      <img src="images/plant8.png" alt="" />
    </a>
  </div>
  <div class="plant9">
    <a href="images/plant9.png" data-lightbox="plant" data-title="Arum">
      <img src="images/plant9.png" alt="" />
    </a>
  </div>
  <div class="plant10">
    <a
      href="images/plant10.png"
      data-lightbox="plant"
      data-title="Cardinal Flowers"
    >
      <img src="images/plant10.png" alt="" />
    </a>
  </div>
</div>
</div>`;
    
    var _updateView = function(pageName){
        console.log("model " + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));
    };

    return{
        updateView: _updateView,
    };
})();