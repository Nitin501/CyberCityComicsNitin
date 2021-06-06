
jQuery(document).ready(function() {
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    jQuery.ajax
    ({
        type: 'get',
        url: '/getimg',
        data:
        {
        },
        success: function (data)
        {
            
            var monthName=months[data.month -1];
            var c = data.num;
            document.getElementById("year").innerHTML = monthName+" "+data.year;
            document.getElementById("title").innerHTML = "#"+c+", "+data.title;
            $('.imgcomic').attr('src', data.img);
            var jsonResult = JSON.stringify(data.transcript);
            var r = jsonResult.replaceAll("[", "").replaceAll("]", "");
            document.getElementById("trans").innerHTML = "TRANSCRIPT:<br/>"+r.replaceAll("{", "").replaceAll("}", "").replaceAll("\\n","<br/>").replaceAll("\"","");
        },
        fail: function(error)
        {
        }
    });

    jQuery('#nextbutton').click(function(event)
    {
        event.preventDefault();
        jQuery.ajax
        ({
            type: 'get',
            url: '/getimgnext',
            data:
            {
            },
            success: function (data)
            {
                var monthName=months[data.month -1];
                var c = data.num;
                document.getElementById("year").innerHTML = monthName+" "+data.year;
                document.getElementById("title").innerHTML = "#"+c+", "+data.title;
                $('.imgcomic').attr('src', data.img);
                var jsonResult = JSON.stringify(data.transcript);
                var r = jsonResult.replaceAll("[", "").replaceAll("]", "");
                document.getElementById("trans").innerHTML = "TRANSCRIPT:<br/>"+r.replaceAll("{", "").replaceAll("}", "").replaceAll("\\n","<br/>").replaceAll("\"","");
            },
            fail: function(error)
            {
            }
        });
    });

    jQuery('#prevbtn').click(function(event)
    {
        event.preventDefault();
        jQuery.ajax
        ({
            type: 'get',
            url: '/getimgprev',
            data:
            {
            },
            success: function (data)
            {
                var monthName=months[data.month -1];
                var c = data.num;
                document.getElementById("year").innerHTML = monthName+" "+data.year;
                document.getElementById("title").innerHTML = "#"+c+", "+data.title;
                $('.imgcomic').attr('src', data.img);

                var jsonResult = JSON.stringify(data.transcript);
                var r = jsonResult.replaceAll("[", "").replaceAll("]", "");
                document.getElementById("trans").innerHTML = "TRANSCRIPT:<br/>"+r.replaceAll("{", "").replaceAll("}", "").replaceAll("\\n","<br/>").replaceAll("\"","");

            },
            fail: function(error)
            {
            }
        });
    });


    jQuery('#randombtn').click(function(event)
    {
        event.preventDefault();
        jQuery.ajax
        ({
            type: 'get',
            url: '/getimgrandom',
            data:
            {
            },
            success: function (data)
            {
                var monthName=months[data.month -1];
                var c = data.num;
                document.getElementById("year").innerHTML = monthName+" "+data.year;
                document.getElementById("title").innerHTML = "#"+c+", "+data.title;
                $('.imgcomic').attr('src', data.img);
                var jsonResult = JSON.stringify(data.transcript);
                var r = jsonResult.replaceAll("[", "").replaceAll("]", "");
                document.getElementById("trans").innerHTML = "TRANSCRIPT:<br/>"+r.replaceAll("{", "").replaceAll("}", "").replaceAll("\\n","<br/>").replaceAll("\"","");
            },
            fail: function(error)
            {
            }
        });
    });


    jQuery('#submiturl').click(function(event)
    {
        let newRouteName = jQuery('#number').val();
        jQuery.ajax
        ({
            type: 'get',
            url: '/getemail',
            data:
            {
                number: newRouteName,
            },
            success: function (data)
            {
                var monthName=months[data.month -1];
                var c = data.num;
                document.getElementById("year").innerHTML = monthName+" "+data.year;
                document.getElementById("title").innerHTML = "#"+c+", "+data.title;
                $('.imgcomic').attr('src', data.img);
                var jsonResult = JSON.stringify(data.transcript);
                var r = jsonResult.replaceAll("[", "").replaceAll("]", "");
                document.getElementById("trans").innerHTML = "TRANSCRIPT:<br/>"+r.replaceAll("{", "").replaceAll("}", "").replaceAll("\\n","<br/>").replaceAll("\"","");
            },
            fail: function(error)
            {
            }
        });
    });
});