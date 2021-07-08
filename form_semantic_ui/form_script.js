// $("#btnModal").click(function () {
//   $(".ui.modal").modal("show");
// });

//to delete a row
function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}

//adding a product
function productUpdate() {
  // var table_len = document.getElementById("productTable").rows.length;

  if (
    $("#name").val() != null &&
    $("#name").val() != "" &&
    $("#contact").val() != null &&
    $("#contact").val() != "" &&
    $("#dept").val() != null &&
    $("#dept").val() != ""
  ) {
    // Add product to Table
    productAddToTable();

    // Clear form fields
    formClear();

    // Focus to product name field
    $("#name").focus();
  } else {
    alert("Please enter all fields");
  }
}

function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  var table_len = document.getElementById("productTable").rows.length;
  if ($("#productTable tbody").length == 0) {
    $("#productTable").append("<tbody></tbody>");
  }

  // Append product to the table
  $("#productTable tbody").append(
    "<tr id='row" +
      table_len +
      "'>" +
      "<td id='name_row" +
      table_len +
      "'>" +
      $("#name").val() +
      "</td><td id='contact_row" +
      table_len +
      "'>" +
      $("#contact").val() +
      "</td>" +
      "<td id='gender_row" +
      table_len +
      "'>" +
      $("#gender").val() +
      "</td>" +
      "<td id='dept_row" +
      table_len +
      "'>" +
      $("#dept").val() +
      "<td>" +
      "<button class='ui primary basic button' onclick='productDelete(this);'><i class='trash icon' style='user-select: auto;'></i>Delete</button>" +
      "<button class='ui primary basic button' id='edit_button" +
      table_len +
      "'  onclick='edit_row(" +
      table_len +
      ")'> <i class='edit icon' style='user-select: auto;'></i>Edit </button><button class='ui primary basic button' id='save_button" +
      table_len +
      "'  onclick='save_row(" +
      table_len +
      ")' style='display:none'> <i class='save icon' ></i>Save </button> </td>" +
      "</tr>"
  );
}

function formClear() {
  $("#name").val("");
  $("#contact").val("");
  $("#dept").val("");
}

//editting row
function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var contact = document.getElementById("contact_row" + no);
  var gender = document.getElementById("gender_row" + no);
  var dept = document.getElementById("dept_row" + no);

  var name_data = name.innerHTML;
  var contact_data = contact.innerHTML;
  var gender_data = gender.innerHTML;
  var dept_data = dept.innerHTML;

  name.innerHTML =
    "<input class='field' type='text' id='name_text" +
    no +
    "' value='" +
    name_data +
    "'>";
  contact.innerHTML =
    "<input type='number' class='field' id='contact_text" +
    no +
    "' value='" +
    contact_data +
    "'>";
  gender.innerHTML =
    "<select type='text' class='ui dropdown' name='dropdown' id='gender_text" +
    no +
    "' value='" +
    gender_data +
    "'><option value='Female'>Female</option><option value='Male'>Male</option> </select>";
  dept.innerHTML =
    "<input class='field' type='text' id='dept_text" +
    no +
    "' value='" +
    dept_data +
    "'>";
}

function save_row(no) {
  document.getElementById("save_button" + no).style.display = "none";

  var name_val = document.getElementById("name_text" + no).value;
  var contact_val = document.getElementById("contact_text" + no).value;
  var gender_val = document.getElementById("gender_text" + no).value;
  var dept_val = document.getElementById("dept_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("contact_row" + no).innerHTML = contact_val;
  document.getElementById("gender_row" + no).innerHTML = gender_val;
  document.getElementById("dept_row" + no).innerHTML = dept_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}
