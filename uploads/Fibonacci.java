public class Fibonacci
{
    public static void main(String[] args)
    {
        int first = 0;
        int second = 1;
        // Change this from 9 to 10 to see the difference.
        for(int i = 0; i < 9; i++){
            System.out.println(second);

            int third = first + second;

            first = second;
            second = third;
        }
    }
}
