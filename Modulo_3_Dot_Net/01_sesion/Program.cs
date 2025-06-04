using System;

class Program
{
    private static Dictionary<string, string> usuarios = new Dictionary<string, string>
    {
        {"admin","123"},//clave valor
        {"admin2", "1234"},
        {"test", "test"}
    }

    ;
    static void Main(string[] args)
    {
        //Mensaje de bienvenida
        Console.WriteLine("\n");
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesion");

        Console.WriteLine("Escribe tu usuario");
        string? usuarioIngresado = Console.ReadLine();//? para indicar que se permiten nulos
        Console.WriteLine("Escribe tu contraseña");
        string? passIngresada = Console.ReadLine();

        if (usuarioIngresado!=null )
        {
            if (usuarios.ContainsKey(usuarioIngresado) &&
            usuarios[usuarioIngresado] == passIngresada)
            {
                Console.WriteLine("Has ingresado con exito");

                for (int i = 1; i <= 50; i++)
                {
                    Console.WriteLine($"{i}. Hola usuario");
                }
                Console.WriteLine("\n Presiona enter para salir del programa..");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Contraseña y/o usuario incorrecta");
                Console.WriteLine("\n Presiona enter para salir del programa..");
                Console.ReadLine();
            }
        }
    }
}