document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
const addBurger = document.getElementById("create-form");

if (addBurger) {
  addBurger.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBurger = {
      burger_name: document.getElementById("burger").value.trim(),
      devoured: false,
    };

    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newBurger),
    }).then(() => {
      document.getElementById("burger").value = "";

      console.log("created new burger");
      location.reload();
    });
  });
}

const devour = document.querySelectorAll(".eat");

if (devour) {
  devour.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const newDevour = e.target.getAttribute("data-newdevour");

      const newDevourState = {
        devoured: true,
      };

      fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newDevourState),
      }).then((response) => {
        location.reload("/");
      });
    });
  });
};
});