
const api = "http://localhost:9000";

$(document).on('click', '.library', function (ev) {
    
    ev.preventDefault();
    
    $.ajax({
        type: "post",
        data: { libid: $(this).attr("for") },
      url: api + "/filter-by-lib",
      success: function (data) {
        console.log("resultfromdb",data.resultfromdb)
        if (data.resultfromdb.length == 0) {
            console.log("datano",data);
          $(".msg").html("No Records Found")
        }
        else {
            console.log("dataok",data);
          var result = ``;
          data.resultfromdb.forEach(obj => {
            console.log(obj);
            result = result + `
                
                <li class="message" for="${obj._id}">${ obj.message }</li>
                <hr>`
          });
          $('.msg').html(result);
        }
      },
      
    
    error: function (err) {
        console.error('AJAX error:', err);
      }
    });
  });

  
  $(document).on('click', '.message', function (ev) {
    
    ev.preventDefault();
    
    $.ajax({
        type: "post",
        data: { msgid: $(this).attr("for") },
      url: api + "/filter-by-msg",
      success: function (data) {
        console.log("resultfromdb =",data.resultfromdb)
        if (data.resultfromdb.length == 0) {
            console.log("datano",data);
          $(".Message").html("No Message Records Found")
        }
        else {
            console.log("dataok",data);
            var result = ``;
            data.resultfromdb.forEach(obj => {
              // console.log(obj);
              result = result + `
                       <label for="" class="form-label">Message</label>
                    <textarea name="message" rows="3" class="form-control" >${ obj.message }</textarea>
                  `
            });
            $('.Message').html(result);

        }
      },

    error: function (err) {
        console.error('AJAX error:', err);
      }
    });
  });




  $(document).on('click', '.group', function (ev) {
    
    ev.preventDefault();
    
    $.ajax({
        type: "post",
        data: { grpid: $(this).attr("for") },
      url: api + "/filter-by-grp",
      success: function (data) {
        console.log("resultfromdb",data.resultfromdb)
        if (data.resultfromdb.length == 0) {
            console.log("datano",data);
          $(".contr").html("No Records Found")
        }
        else {
            console.log("dataok",data);
          var result = ``;
          data.resultfromdb.forEach(obj => {
            // console.log(obj);
            result = result + `
                     
                <li class="contact"  for="${obj._id}">${ obj.name }</li>
                <hr>
                      `
          });
          $('.contr').html(result);

        }
      },

    error: function (err) {
        console.error('AJAX error:', err);
      }
    });
  });

  $(document).on('click', '.contact', function (ev) {
    
    ev.preventDefault();
    
    $.ajax({
        type: "post",
        data: { contrid: $(this).attr("for") },
      url: api + "/filter-by-contr",
      success: function (data) {
        console.log("resultfromdb",data.resultfromdb)
        if (data.resultfromdb.length == 0) {
            console.log("datano",data);
          $(".detail").html("No Records Found")
        }
        else {
            console.log("dataok",data);
          var result = ``;
          data.resultfromdb.forEach(obj => {
            // console.log(obj);
            result = result + `
                     
             <div class="mb-3 Name">
                    <label for="" class="form-label">Name</label>
                    <input name="name" type="text" id="" class="form-control " placeholder="Name" value="${ obj.name}">
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Phone Number</label>
                    <input name="number" type="number" id="" class="form-control Phone" placeholder="Phone Number " value="${ obj.number }">
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input name="email" type="email" id="" class="form-control" placeholder="Email" value="${ obj.email }">
                  </div>
               
                      `
          });
          $('.detail').html(result);

        }
      },

    error: function (err) {
        console.error('AJAX error:', err);
      }
    });
  });


//   $(document).on('click', '.delete-icon', function () {
//     const libId = $(this).attr('for');
    
//     if (confirm('Are you sure you want to delete this item?')) {
//       $.ajax({
//         type: 'POST',
//         url: api + '/delete-library',
//         data: { id: libId },
//         success: function (response) {
//           if (response.success) {
//             $(`tr[data-id='${libId}']`).remove();
//             // alert('Item deleted successfully.');
//             window.location.reload(); 
//           } else {
//             alert('Error deleting item.');
//           }
//         },
//         error: function (error) {
//           console.error('Error:', error);
//           alert('Error deleting item.');
//         }
//       });
//     }
//   });

DELETE________________
function deleteItem(apiEndpoint, libId, rowSelector) {
    if (confirm('Are you sure you want to delete this item?')) {
        $.ajax({
            type: 'POST',
            url: apiEndpoint,
            data: { id: libId },
            success: function (response) {
                if (response.success) {
                    $(`tr[data-id='${libId}']`).remove();
                    window.location.reload();
                } else {
                    alert('Error deleting item.');
                }
            },
            error: function (error) {
                console.error('Error:', error);
                alert('Error deleting item.');
            }
        });
    }
}
$(document).on('click', '.delete-icon', function () {
    const libId = $(this).attr('for');
    deleteItem(api + '/delete-library', libId, `tr[data-id='${libId}']`);
});

$(document).on('click', '.delete-icon', function () {
    const libId = $(this).attr('for');
    deleteItem(api + '/delete-library', libId, `tr[data-id='${libId}']`);
});