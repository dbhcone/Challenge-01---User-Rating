window.onload = () => {
  //   alert("window loaded");

  handleSubmit = () => {
    // alert("handling sumbit");
    getSelectedRating();
  };

  selectRating = (element) => {
    const rating = element.value;
    // console.log("rating", rating);

    // reset all ratings
    resetRatings();

    // then set the current one
    element.classList.add("selected");
  };

  // all rating buttons
  resetRatings = () => {
    let rating_elements = document.getElementsByClassName("btn-rating");
    const length = rating_elements.length;
    for (let i = 0; i < length; i++) {
      rating_elements[i].classList.remove(["selected"]);
    }
  };

  getSelectedRating = () => {
    const selected_rating = document.querySelector(".selected");
    if (selected_rating) {
      const rating = selected_rating.value;
      //   alert("you selected " + rating);
      redirectTo("thank_you", { rating });
    } else {
      alert("We'd appreciate if you could rate us. Thanks.");
    }
  };

  // this only works for one params (key:value). Can be extend to take multiple
  redirectTo = (path, param) => {
    window.location.href = `${path}.html?${Object.keys(param)[0]}=${
      param.rating
    }`;
  };
};
