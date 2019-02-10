<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"
      ><a href="#">Stock Trader</a></router-link
    >
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" tag="li"
          ><a class="nav-link" href="#">Home </a></router-link
        >

        <li class="nav-item">
          <router-link to="/stocks" active-class="active"
            ><a class="nav-link" href="#">Stocks</a></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/portfolio" active-class="active"
            ><a class="nav-link" href="#">Portfolio</a></router-link
          >
        </li>
      </ul>
      <ul class="navbar-nav navbar-right">
        <li class="nav-item"><a class="nav-link">End Day</a></li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save / Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
.nav
  align-items: center;
  display: flex;
  justify-content: space-around;
  background: black;

.route-links
  position: relative;
  width: calc(30vw);
  display: flex;
  flex-wrap: wrap;

  ul
    width: 100%;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
</style>
