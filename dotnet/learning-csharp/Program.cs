using System;
using System.Linq;
namespace HelloWorld
{
    class Program
    {
        public static void Main(string[] args)
        {
            // Console.WriteLine("Test");
            // int x = 10;
            // bool y = false;
            // const double z = 20.54;

            // Console.WriteLine($"{x} {y} {z}");
            // long l = 1000000L;
            // float f = 10.392F;
            // double d = 2309.322D;
            // Console.WriteLine(l);
            // Console.WriteLine(f);
            // Console.WriteLine(d);
            // float f1 = 35e3F;
            // double d1 = 12E4D;
            // Console.WriteLine(f1);
            // Console.WriteLine(d1);
            // var person = new Person("eltayeb", 30);
            // Console.WriteLine(person.name);


            // double doub = 10.2123;
            // int inte = (int) doub;

            // Console.WriteLine(inte);

            // int myInt = 10;
            // double myDouble = 20.33;
            // bool myBoolean = false;
            // Console.WriteLine(Convert.ToString(myInt));
            // Console.WriteLine(Convert.ToString(myBoolean));
            // Console.WriteLine(Convert.ToDouble(myInt));
            
            // Console.WriteLine("Enter Your Username");
            // string username = Console.ReadLine();
            // Console.WriteLine(username);

            // Console.WriteLine(Math.Round(0233.344));
            // string mystr = "Hello World";
            // int myInt = 10;
            // Console.WriteLine(mystr.Length);

            // string mystr = "Hello World";
            // int myInt = 10;

            // Console.WriteLine(mystr + myInt);

            // string name = "John Doe";
            // int charPos = name.IndexOf('D');
            // Console.WriteLine(charPos);

            // string lastName = name.Substring(charPos);
            // Console.WriteLine(lastName);

            // int time = 20;
            // string result = (time < 18) ? "day" : "night";
            // Console.WriteLine(result);

            // string [] arr = {"eltayeb", "ahmed"};
            // for(int i = 0; i < arr.Length; i++){
            //     Console.WriteLine(arr[i]);
            // }

            // foreach (string name in arr)
            // {
            //     Console.WriteLine(name);
            // }

            // for(int i =0; i < 5; i++) {
            //     if(i == 3){
            //         break;
            //     }
            //     Console.WriteLine("" + i);
            // }

            // for(int i = 0; i < 5; i++){
            //     if(i == 3){
            //         continue;
            //     }
            //     Console.WriteLine(i);
            // } 

            // string [] arr = new string[4] { "eltayeb", "ahmed", "omer", "masaad"};
            // string [] names;
            // names = new string[] { "eltayeb", "ahmed" };

            // string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
            // Array.Sort(cars);
            // foreach (string car in cars)
            // {
            //     Console.WriteLine(car);
            // }

            // int[] myNumbers = {5, 1, 8, 9};
            // Console.WriteLine(myNumbers.Max());

            // multidimensional arrays

            // int [,] numbers = {{1,2}, {3,4}};
            // printTest();
            // sayHello();
            // Console.WriteLine(sum(10.02, 20.98));
            // Console.WriteLine(sum(3,4));

            Car car= new Car("Toyota");
            Console.WriteLine(car.name);
            Console.WriteLine(car);

        }

        // static void printTest(){
        //     Console.WriteLine("Test");
        // }

        // static void sayHello(string name = "Eltayeb"){
        //     string x = " ds";
        //     Console.WriteLine($"Hello {name + x}");
        // }

        // static double sum(double x , double y) {
        //     return x + y;
        // }

        // static int sum(int x , int y) {
        //     return x + y;
        // }
    }
}