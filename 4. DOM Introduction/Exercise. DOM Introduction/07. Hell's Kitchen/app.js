function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const textAreaRef = document.querySelector("textarea");
   const bestRestaurant = document.querySelector("#bestRestaurant p");
   const bestWorkersRef = document.querySelector("#workers p");

   function onClick () {
      const data = textAreaRef.value;
      const restaurantData = JSON.parse(data);

      const restaurants = {}; 

      for (let el of restaurantData) {
         const [name, workersData] = el.split(" - ");
         if (restaurants.hasOwnProperty(name)) {
            restaurants[name] = {
               bestSalary: 0,
               avgSalary: 0,
               workers: []
            }
         }
      
         const workers = workersData.split(", ");
         const newWorkerList = createWorkerList(workers);
         result[name].workers = concat(result[name].workers, newWorkerList)
         const salaryData = calculateRestaurantData(result[name].worker);
         result.avgSalary = salaryData.avgSalary;
         result[bestSalary] = salaryData.bestSalary;
      }

   }

   function createWorkerList(data) {
      const result = [];
      
      for (let el of data) {
         const [name, salary] = el.split(" ");
         salary = Number(salary);
         result.push({
            name,
            salary
         })
      }
      return result;
   }

   function concat(oldList, newList) {
      return oldList.concat(newList);
   }

   function calculateRestaurantData(workerList) {
      const result = {
         avgSalary:0,
         bestSalary:0
      }

      let sum = 0;
      for (worker of workerList) {
         let salary = worker.salary;
         sum += salary;

         if (result.bestSalary < salary) {
            result.bestSalary = salary;
         }
      }

      result.avgSalary = sum / workerList.length;
      return result;
   }
}