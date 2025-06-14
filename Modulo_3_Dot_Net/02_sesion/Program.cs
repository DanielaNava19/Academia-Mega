using System;
using System.ComponentModel;
using System.Text;

class Program
{
    private static Dictionary<string, string> usuarios = new Dictionary<string, string>
    {
        {"admin","123"},//clave valor
        {"admin2", "1234"},
        {"test", "test"}
    };

    private const int MAX_ATTEMPTS = 3;
    static void Main(string[] args)
    {
        //Mensaje de bienvenida
        Console.WriteLine("\n");
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesion");

        Console.WriteLine("Escribe tu usuario");
        string? usuarioIngresado = TryLogin();//? para indicar que se permiten nulos

        if (usuarioIngresado != null)
        {
            Console.WriteLine($"Hola {usuarioIngresado}");
        }
        else
        {
            Console.WriteLine("Has excedido el numero maximo de intentos");
        }
        Console.WriteLine("Presiona Enter para salir");
        Console.ReadLine();
    }

    private static string? TryLogin()
    {
        int intentosRestantes = MAX_ATTEMPTS;

        while (intentosRestantes > 0)
        {
            Console.WriteLine($"\nIntentos restantes: {intentosRestantes}");
            Console.WriteLine("Ingresa tu nombre de usuario");
            string? userLogged = Console.ReadLine();
            Console.WriteLine("Escribe tu contraseña");
            string? passIngresada = ReadPassword();

            if (string.IsNullOrWhiteSpace(userLogged) || string.IsNullOrWhiteSpace(passIngresada))
            {
                Console.WriteLine("\nError: El usuario y contraseña no pueden estar vacios");
                intentosRestantes--;
                continue;
            }
            if (usuarios.ContainsKey(userLogged) &&
                usuarios[userLogged] == passIngresada)
            {
                Console.WriteLine("\nAcceso concedido");
                return userLogged;
            }
            else
            {
                Console.WriteLine("Contraseña y/o usuario incorrecta");
                Console.WriteLine("\n Intentalo de nuevo..");
                intentosRestantes--;
            }
        }
        return null;
    }
    private static string? ReadPassword()
    {
        StringBuilder password = new StringBuilder();
        ConsoleKeyInfo keyInfo;
        do
        {
            keyInfo = Console.ReadKey(true);
            if (!char.IsControl(keyInfo.KeyChar))
            {
                password.Append(keyInfo.KeyChar);
                Console.Write("*");
            }
            else if (keyInfo.Key == ConsoleKey.Backspace && password.Length > 0)
            {
                password.Remove(password.Length - 1, 1);
                Console.Write("\b \b");
            }
        } while (keyInfo.Key != ConsoleKey.Enter);
        Console.WriteLine();
        return password.ToString();
    }
}