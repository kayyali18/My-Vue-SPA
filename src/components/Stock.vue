<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title ">NAME <small>(Price: PRICE)</small></h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="text" class="form-control" placeholder="Quantity" />
        </div>
        <div class="pull-right">
          <button class="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.panel

  margin-bottom: 2rem;
  margin-top: 2rem;

.panel-body
  display: flex;
  justify-content: space-around;
</style>
