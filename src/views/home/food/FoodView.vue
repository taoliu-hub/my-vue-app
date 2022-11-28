<template>
    <h1>This is a Food page</h1>
    <nav>
        Route by path:  |
        <router-link to="/food/food-detail">Food Details</router-link>
        <br/>
        Route by name: |
        <router-link :to="{name: 'fooddetail'}">Food Details</router-link>
    </nav>
    <router-view />
</template>
  