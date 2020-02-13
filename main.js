	    function doPost()
            {
              window.opener = null;
              form.action='http://risyu.is.it-chiba.ac.jp/syllabus/wwsy0010';
	      document.form.submit();
	    }

            function go()
            {
              if(window.event.keyCode==13)    doPost();
            }
