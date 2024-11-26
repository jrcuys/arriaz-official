(function () {
    'use strict';
    angular
        .module('app')
        .controller('miloStoreCtrl', miloStoreCtrlFn)
      
        function miloStoreCtrlFn() {
            const vm = this;

            vm.listSearchCategories = [
                {typeSearch : 'Semua Lokasi'},
                {typeSearch : 'Tasikmalaya'},
                {typeSearch : 'Jakarta'}
            ]
            
            vm.searchType = vm.listSearchCategories[0].typeSearch
            vm.chooseType = (idx) => {
                vm.searchType = vm.listSearchCategories[idx].typeSearch
            }

            function listCart() {
                vm.listCart = [
                    {img:'00_assets/02_images/landing/img-1.png', name:'Branded T-Shirts', quantity:'Quantity: 10 x $32', totalPriceItem:'320'},
                    {img:'00_assets/02_images/landing/img-1.png', name:'Branded T-Shirts', quantity:'Quantity: 10 x $32', totalPriceItem:'320'},
                    {img:'00_assets/02_images/landing/img-1.png', name:'Branded T-Shirts', quantity:'Quantity: 10 x $32', totalPriceItem:'320'},
                    {img:'00_assets/02_images/landing/img-1.png', name:'Branded T-Shirts', quantity:'Quantity: 10 x $32', totalPriceItem:'320'},
                    {img:'00_assets/02_images/landing/img-1.png', name:'Branded T-Shirts', quantity:'Quantity: 10 x $32', totalPriceItem:'320'}
                ]
            }
            listCart()

            function listProducts() {
                vm.products = [
                    {id:'1', img:'00_assets/02_images/produk/1.jpeg', category:'Baju Dewasa', name:'Stelan Dewasa', sold:'89', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                    {id:'2', img:'00_assets/02_images/produk/2.jpeg', category:'Baju Anak', name:'Baju Koko', sold:'72', priceItem:'350.000', sellerLocation:'Tasikmalaya'},
                    {id:'3', img:'00_assets/02_images/produk/3.jpeg', category:'Baju Wanita', name:'Baju Koko', sold:'90', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                    {id:'4', img:'00_assets/02_images/produk/4.jpeg', category:'Koko Dewasa', name:'Baju Koko', sold:'78', priceItem:'150.000', sellerLocation:'Tasikmalaya'},
                    {id:'5', img:'00_assets/02_images/produk/5.jpeg', category:'Koko Anak', name:'Baju Koko', sold:'99', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                    {id:'6', img:'00_assets/02_images/produk/1.jpeg', category:'Gamis', name:'Baju Koko', sold:'120', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                    {id:'7', img:'00_assets/02_images/produk/1.jpeg', category:'Gamis', name:'Baju Koko', sold:'15', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                    {id:'8', img:'00_assets/02_images/produk/1.jpeg', category:'Gamis', name:'Baju Koko', sold:'12', priceItem:'250.000', sellerLocation:'Tasikmalaya'},
                ]
            }
            listProducts()
        }
})()
