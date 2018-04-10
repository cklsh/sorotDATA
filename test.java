interface Form
{
    abstract String render();
}

class Action
{
   Form form;

   public void Action(Form form)
   {
      this.form = form;
   }

   public void setForm(Form form)
   {
      this.form = form;
   }

   public void render()
   {
      System.out.println("<html>");
      System.out.println(this.form.render());
      System.out.println("</html>");
   }
}

class Doctor implements Form
{
   public String render()
   {
      return "<form>sesuatu</form>";
   }
}
