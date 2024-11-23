import java.io.*;

class Parent
{
    public static void main(String[] args)
    {
        // The process object that will host the Child:
        Process proc = null;

        // First, compile the Child:
        try
        {
            Process processCompile = Runtime.getRuntime().exec("javac Child.java");
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

        // Sleep for 1 second to wait for the compiled CLASS file to be ready:
        try
        {
          Thread.sleep(1000);
        }
        catch (InterruptedException e)
        {
          Thread.currentThread().interrupt();
        }

        // Then, exec() the Child:
        try
        {
            // Command to create an external process
            String command = "java -cp dir";
  
            // Running the above command
            Runtime run  = Runtime.getRuntime();
            proc = run.exec(command);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }

        // Finally, print the Child program's output:
        // Based on: https://stackoverflow.com/a/12746055/14167156
        try
        {
            printLines("Child says:", proc.getInputStream());
            printLines("Any errors:", proc.getErrorStream());
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        
    }

    /* Function for printing output: */
    /* Taken from https://stackoverflow.com/a/12746055/14167156 */
    private static void printLines(String name, InputStream ins) throws Exception
    {
        String line = null;
        BufferedReader in = new BufferedReader(new InputStreamReader(ins));
        while ((line = in.readLine()) != null)
        {
            System.out.println(name + " " + line);
        }
    }
}