<section id="contact">
    <div class="wrap">
        <header>
            <h2>Contact</h2>
            <p>If you're interested in discussing your project with us, please don't hesitate to reach out! We're looking forward to hearing from you.</p>
        </header>

        <?php
        //if "email" variable is filled out, send email
          if (isset($_REQUEST['email']))  {

          //Email information
          $admin_email = "dbeccaria@material-distributors.com";
          $email = $_REQUEST['email'];
          $name = $_REQUEST['name'];
          $phone = $_REQUEST['phone'];
          $comment = $_REQUEST['comment'];

          $subject = "HFC General Contact Received";
          $message = "The message is from " . $name . "Their phone number is: " . $phone . " . Their message is: " . $comment;

          //send email
          mail($admin_email, "$subject", $message, "From:" . $email);

          //Email response
          echo "Thank you for contacting us! We will get back to you shortly. If you need to get in touch fast, please call us instead: (610)667-4800.";
          }

          //if "email" variable is not filled out, display the form
          else  {
        ?>

        <div class="contact-form">
            <form method="post">
                <input name="name" placeholder="Full Name" type="text" />
                <input name="email" placeholder="Email Address" type="text" />
                <input name="phone" placeholder="Phone Number" type="text" />
                <textarea name="comment" placeholder="Message"></textarea>
                <input name="submit" type="submit" value="Submit" class="submit"/>
            </form>
        </div>

        <?php
          }
        ?>
    </div>

    <div class="contact-info">
        <h3>Material Distributors, Inc.</h3>
        <p>
            8 Cynwyd <br/>
            Bala Cynwyd, PA 19004 <br/>
            (610)667-4800
        </p>
        <p><a href="mailto:dbeccaria@material-distributors.com">dbeccaria@material-distributors.com</a></p>

    </div>
</section>
