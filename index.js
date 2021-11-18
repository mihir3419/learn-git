let app = new Vue({
  
    el: "#app",
   
    data: {
       showProduct: true,
       lessons: lessons,
       space: space,
      
       
       sort:'',
       filter:'',
      
          
        cart: [],

        order: {
            firstName: '',
            lastName: '',
            address: '',
            mobileNum: '',
            city: '',
            zip: 1234,
            state: '',
            method: 'Home',
   
        },

        error: [],

        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada',
        },
  
   
    },


   
    methods: {

        addItem: function(id) {

            this.cart.push(id);

            this.lessons[id].space--;

        },

        removeItem(index) {
            lessons[index].space++;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] == index) {
                    this.cart.splice(i, 1);
                    console.log(i + " " + index);
                    break;

                }
            }
        },

        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        
        canAddToCart: function(id) {
            return lessons[id].availableInventory > this.cartCount(id);
        },

        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },

        acendingPriceSort: function() {
            function comparsion (a, b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                return 0;
            }
            return this.lessons.sort(comparsion);
        },

        decendingPriceSort: function() {
            function compare (c, d) {
                if (d.price < c.price) return -1;
                if (d.price > c.price) return 1;
                return 0;   
            }
            return this.lessons.sort(compare);
        },

        acendingLocationSort: function() {
            function comparsion (a, b) {
                if (a.location > b.location) return 1;
                if (a.location < b.location) return -1;
                return 0;
            }
            return this.lessons.sort(comparsion);
        },

        decendingLocationSort: function() {
            function compare (c, d) {
                if (d.location < c.location) return -1;
                if (d.location > c.location) return 1;
                return 0;   
            }
            return this.lessons.sort(compare);
        },


        
        acendingSubjectSort: function() {
            function comparsion (a, b) {
                if (a.subject > b.subject) return 1;
                if (a.subject < b.subject) return -1;
                return 0;
            }
            return this.lessons.sort(comparsion);
        },

        decendingSubjectSort: function() {
            function compare (c, d) {
                if (d.subject < c.subject) return -1;
                if (d.subject > c.subject) return 1;
                return 0;   
            }
            return this.lessons.sort(compare);
        },
        

        acendingSpaceSort: function() {
            function comparsion (a, b) {
                if (a.space > b.space) return 1;
                if (a.space < b.space) return -1;
                return 0;
            }
            return this.lessons.sort(comparsion);
        },

        decendingSpaceSort: function() {
            function compare (c, d) {
                if (d.space < c.space) return -1;
                if (d.space > c.space) return 1;
                return 0;   
            }
            return this.lessons.sort(compare);
        },
           

        },
    

    computed: {

        cartItemCount: function() {

            return this.cart.length || '';  

        },

          sortlesson(){
            var lessons = this.lessons.filter((lessons) => {
                return lessons.subject.toLowerCase().includes(this.filter.toLowerCase());
              });
            
              return lessons
          
            
            
          },
          submitForm () {

          
 
             if  (this.order.firstName.match(/[A-Za-z]/)&&this.order.mobileNum.match(/[0-9]/)&&this.order.mobileNum.length>=10)
             {
         
               
                 return false;
                 
                 
             }
    

             else {
              
                
                 return true;
             
                
             }
             
             
         }

      
          
        }
      })
          




