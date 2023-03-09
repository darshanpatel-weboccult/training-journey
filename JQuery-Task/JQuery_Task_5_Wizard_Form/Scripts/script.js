let $btnNext,
  $btnPrev,
  $btnCancel,
  $inpFName,
  $inpLName,
  $inpDOB,
  $inpEmail,
  $inpContact,
  $inpGender,
  $inpSport,
  $inpAbout,
  $inpTOS,
  $level1,
  $level2,
  $level3,
  $table,
  $form,
  jqTable,
  editIndex,
  currStep = 1;

$(document).ready(() => {
  {
    // VARIABLE ASSIGNMENT
    $btnPrev = $("#btn_prev");
    $btnNext = $("#btn_next");
    $btnCancel = $("#btn_cancel");

    $inpFName = $("#firstName");
    $inpLName = $("#lastName");
    $inpGender = $("input[type=radio]");
    $inpEmail = $("#email");
    $inpContact = $("#contact");
    $inpDOB = $("#dob");
    $inpSport = $("#sport");
    $inpAbout = $("#about");
    $inpTOS = $("#tos");

    $level1 = $(".form-grid:eq(0)");
    $level2 = $(".form-grid:eq(1)");
    $level3 = $(".form-grid:eq(2)");

    $table = $("#table_data");
    $form = $("#theForm");
  }

  // INITIALIZATION

  $form.on("submit", function (event) {
    event.preventDefault();
    handleSubmit();
  });
  $(".container-steps > p:first-child").addClass("completed");
  jqTable = $("#jq_table").DataTable({
    columns: [
      { data: null, render: (data, type, row, meta) => Number(meta.row) + 1 },
      { data: "fname" },
      { data: "lname" },
      { data: "gender" },
      { data: "email" },
      { data: "contact" },
      { data: "dob" },
      { data: "sport" },
      { data: "about" },
      { data: "tos" },
      {
        data: null,
        render: () => "<button class='btn btn-edit'>EDIT</button>",
      },
      {
        data: null,
        render: () => "<button class='btn btn-delete'>DELETE</button>",
      },
    ],
  });
});

{
  // ON NEXT
  $(document).on("click", "#btn_next", function () {
    currStep === 3 ? $form.submit() : nextStep();
  });

  // ON PREV
  $(document).on("click", "#btn_prev", function () {
    prevStep();
  });

  // ON EDIT
  $(document).on("click", ".btn-edit", function () {
    editRecord(jqTable.row($(this).closest("tr")).index());
  });

  // ON DELETE
  $(document).on("click", ".btn-delete", function () {
    deleteRecord(jqTable.row($(this).closest("tr")).index());
  });

  // ON CANCEL
  $(document).on("click", "#btn_cancel", function () {
    cancelEdit();
  });
}

// FUNCTION : MOVES FORWARDS
function nextStep() {
  if (currStep === 3) return;

  if (currStep === 2) {
    if (!$form.valid()) return;
    $level3.removeClass("hidden").siblings().addClass("hidden");
    $btnNext.text(editIndex || editIndex === 0 ? "Update" : "Submit");
    $(".container-steps > p:nth-of-type(3)").addClass("completed");
    $(".container-steps > div:nth-of-type(2) >span").addClass("completed-bar");
    currStep++;
    return;
  }

  if (currStep === 1) {
    if (!$form.valid()) return;
    $level2.removeClass("hidden").siblings().addClass("hidden");
    $btnPrev.removeClass("invisible");
    $(".container-steps > p:nth-of-type(2)").addClass("completed");
    $(".container-steps > div:nth-of-type(1) >span").addClass("completed-bar");
    currStep++;
    return;
  }
}

// FUNCTION : MOVES BACKWARDS
function prevStep() {
  if (currStep === 1) return;

  if (currStep === 2) {
    $level1.removeClass("hidden").siblings().addClass("hidden");
    $btnPrev.addClass("invisible");
    $(".container-steps > p:nth-of-type(2)").removeClass("completed");
    $(".container-steps > div:nth-of-type(1) >span").removeClass(
      "completed-bar"
    );
    currStep--;
    return;
  }

  if (currStep === 3) {
    $level2.removeClass("hidden").siblings().addClass("hidden");
    $btnNext.text("Save & Next");
    $(".container-steps > p:nth-of-type(3)").removeClass("completed");
    $(".container-steps > div:nth-of-type(2) >span").removeClass(
      "completed-bar"
    );
    currStep--;
    return;
  }
}

// FUNCTION: SAVES DATA TO TABLE
function handleSubmit() {
  console.log("submit");
  if (!$form.valid()) return;
  const [fname, lname, gender, email, contact, dob, sport, about, tos] =
    getValues(
      $inpFName,
      $inpLName,
      $inpGender,
      $inpEmail,
      $inpContact,
      $inpDOB,
      $inpSport,
      $inpAbout,
      $inpTOS
    );
  if (editIndex || editIndex === 0) {
    jqTable.row(editIndex).data({
      fname,
      lname,
      gender,
      email,
      contact,
      dob,
      sport,
      about,
      tos,
    });
    
  } else {
    jqTable.row.add({
      fname,
      lname,
      gender,
      email,
      contact,
      dob,
      sport,
      about,
      tos,
    });
    
  }
  // Used Time out because on resetting form validator was giving error with blank inputs
  setTimeout(() => $form.trigger("reset"), 10);
  editIndex = null;
  jqTable.draw();
  $btnCancel.addClass("invisible");
  $btnNext.text("Save & Next");
  prevStep();
  prevStep();
}

// FUNCTION: deletes row
function deleteRecord(rowIndex) {
  rowIndex = Number(rowIndex);
  jqTable.row(rowIndex).remove();
  // added invalidate() to update sr no after row deletion (The invalidate() function just deletes DataTable cache causing re-render of table with fresh values);
  jqTable.rows().invalidate().draw();
}

// FUNCTION: edits row
function editRecord(rowIndex) {
  rowIndex = Number(rowIndex);
  editIndex = rowIndex;
  setValues(
    rowIndex,
    $inpFName,
    $inpLName,
    $inpGender,
    $inpEmail,
    $inpContact,
    $inpDOB,
    $inpSport,
    $inpAbout,
    $inpTOS
  );
  $btnNext.text(currStep === 3 ? "Update" : "Save & Next");
  $btnCancel.removeClass("invisible");
}

// FUNCTION: cancel Edit
function cancelEdit() {
  setValues(
    "reset",
    $inpFName,
    $inpLName,
    $inpGender,
    $inpEmail,
    $inpContact,
    $inpDOB,
    $inpSport,
    $inpAbout,
    $inpTOS
  );
  $btnCancel.addClass("invisible");
  $btnNext.text(currStep === 3 ? "Submit" : "Save & Next");
  editIndex = null;
}

// UNIVERSAL FUNCTIONS
{
  // RETURNS VALUES OF FIELDS
  function getValues(...fields) {
    const values = [];
    $(fields).each(function () {
      // RADIO
      if ($(this).attr("type") === "radio") {
        values.push($(this).filter(":checked").val() ?? null);
        return;
      }

      // CHECKBOX
      if ($(this).attr("type") === "checkbox") {
        values.push($(this).prop("checked") ? "Agree" : "Disagree");
        return;
      }

      values.push($(this).val());
    });

    return values;
  }

  // SET VALUES OF DOM ELEMENTS (@param reference = "reset" | rowIndex)
  function setValues(reference, ...fields) {
    if (reference === "reset") {
      $(fields).each(function () {
        // RADIO
        if ($(this).attr("type") === "radio") {
          $(this).filter(":checked").prop("checked", false);
          return;
        }

        // CHECKBOX
        if ($(this).attr("type") === "checkbox") {
          $(this).prop("checked", false);
          return;
        }

        // SELECT
        if ($(this).attr("name") === "sport") {
          $(this).prop("selectedIndex", 0);
          return;
        }

        $(this).val("");
      });
      return;
    }

    console.log(reference);
    const row = jqTable.row(reference).data();
    $(fields).each(function () {
      // RADIO
      if ($(this).attr("type") === "radio") {
        if (!row[$(this).attr("name")]) {
          $(this).filter(":checked").prop("checked", false);
          return;
        }
        row[$(this).attr("name")] === "male"
          ? $(this).filter("#gMale").prop("checked", true)
          : $(this).filter("#gFemale").prop("checked", true);
        return;
      }

      // CHECKBOX
      if ($(this).attr("type") === "checkbox") {
        row[$(this).attr("name")] === "Agree"
          ? $(this).prop("checked", true)
          : $(this).prop("checked", false);
        return;
      }

      $(this).val(row[$(this).attr("name")]);
    });
  }
}
