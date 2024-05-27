using System;
namespace HelloWorld
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Test");
            int x = 10;
            bool y = false;
            const double z = 20.54;

            Console.WriteLine($"{x} {y} {z}");
            long l = 1000000L;
            float f = 10.392F;
            double d = 2309.322D;
            Console.WriteLine(l);
            Console.WriteLine(f);
            Console.WriteLine(d);
            float f1 = 35e3F;
            double d1 = 12E4D;
            Console.WriteLine(f1);
            Console.WriteLine(d1);
            var person = new Person("eltayeb", 30);
            Console.WriteLine(person.name);


            double doub = 10.2123;
            int inte = (int) doub;

            Console.WriteLine(inte);
        }
    }
}