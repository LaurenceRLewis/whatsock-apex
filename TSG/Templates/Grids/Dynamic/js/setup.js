$A.import("Grid", { defer: true }, function() {
  var grid = new $A.Grid("dataGridId");

  // Track the selected mode, starting with the default (readonly)
  var mode = "rr";
  $A.on("#rr, #rs, #re", "click change", function() {
    if (mode === this.id) return;

    mode = this.id;
    var mro = $A.get("mro"),
      msc = $A.get("msc"),
      mmm = $A.get("mmm");

    if (mode === "rr") {
      $A.addClass([msc, mmm], "hidden");

      $A.remClass(mro, "hidden");

      grid.setSelect({
        enable: false
      });

      grid.editable(false);
    } else if (mode === "rs") {
      $A.addClass(mro, "hidden");
      $A.remClass([msc, mmm], "hidden");

      grid.editable(false);
      grid.setSelect({
        enable: true,
        toggleClass: "selected",
        // Set single or multiSelect
        multiSelect: false,
        // Use ARIA for selection or cross-platform offscreen text instead
        ariaSelect: false,
        // Choose whether rendering another page will automatically unselect previously selected rows.
        preserve: false,
        // Set a callback to execute every time a row is toggled
        callback: function(
          rowObject,
          state,
          prevSelectedRowsArray,
          gridInstance
        ) {
          // rowObject is the activated row object.
          // rowObject.rowNode is the DOM node for the toggled row.
          // rowObject.cells is the object reference that stores all child cellObjects.
          // State reflects the proposed state change, which is the opposite of rowObject.selected.
          // prevSelectedRowsArray is an array of all previously selected rowObjects, not counting the current rowObject.
          // To cancel the toggle action, return false
        }
      });
    } else if (mode === "re") {
      $A.addClass([mro, msc, mmm], "hidden");

      grid.setSelect({
        enable: false
      });

      grid.editable(true);
    }
    grid.open(grid.currentPage());
  });

  grid.setEditOffset(function(cellObject) {
    var o = $A.offset(cellObject.cellNodeA);
    o.height = $A.offset(cellObject.cellNodeA).height;
    o.width = $A.offset(cellObject.cellNodeA).width;
    return o;
  });

  grid.setChangeListener(function(
    originalCellObject,
    newValue,
    rowObject,
    gridInstance
  ) {
    // rowObject reflects the same object passed to grid.add
    // so that rowObject.id reflects the original row ID.
    // originalCellObject reflects the cell object instance passed within 'cells' when passed to grid.add
    // making it easy to validate the data by comparing originalCellObject.value with newValue
    // To prevent rendering the changed input or new toggle state, simply return false
    if (typeof newValue !== "boolean" && !newValue) return false;

    var val =
        typeof newValue === "boolean"
          ? newValue
            ? "true"
            : "false"
          : formatStr(newValue),
      str =
        '<span>Update DB row "' +
        rowObject.id +
        '" field "' +
        originalCellObject.id +
        '" with <br />value: "' +
        val +
        '"</span>',
      popup = $A.get("popupId");
    popup.innerHTML = str;
    $A.remClass(popup, "hidden");
    setTimeout(function() {
      $A.addClass(popup, "hidden");
    }, 4000);
    $A.announce(popup);
  });

  // set accessible text for screen reader users
  grid.setAccessibleText({
    // Set offscreen and tooltip text for toggle cells
    toggleButtonRole: "Toggle Button",
    toggleButtonState: "Pressed",
    disabledText: "Disabled",
    // Set the page text to be announced to screen reader users during infinite scrolling. E.G "Page 2", "Page 3", etc.
    pageRole: "Page",
    // Set the active state and help tooltip text for mouse users
    selectState: "Selected",
    editLinkAction: "Editable",
    dblClickTitle: "Click to activate",
    // Set the title text for the edit field
    editFieldTitle: "Press Enter to save, or Escape to cancel."
  });

  grid.mapColumnNames([
    {
      id: "row-id",
      lbl: "ID",
      colClass: "gridcell-col1"
    },
    {
      id: "personal-name",
      lbl: "Name",
      colClass: "gridcell-col2"
    },
    {
      id: "personal-email",
      lbl: "Email",
      colClass: "gridcell-col3"
    },
    {
      id: "personal-city",
      lbl: "Residence",
      colClass: "gridcell-col4"
    },
    {
      id: "personal-university",
      lbl: "University",
      colClass: "gridcell-col5"
    },
    {
      id: "personal-status",
      lbl: "Attendance",
      colClass: "gridcell-col6"
    }
  ]);

  grid.enableRowHeaders(true, "row-id");
  grid.setRowMax(10);

  var pageHeaderSpan = $A.get("pTotal"),
    pageEdit = $A.get("goTo"),
    pageCurrent = 0,
    pageTotal = 0,
    firstBtn = $A.get("btnFirst"),
    prevBtn = $A.get("btnPrev"),
    nextBtn = $A.get("btnNext"),
    lastBtn = $A.get("btnLast"),
    pgn = $A.get("pgn");

  grid.setPageIndexChangeListener(function(
    currentPage,
    totalPages,
    gridInstance
  ) {
    if (pageCurrent !== currentPage) {
      if (currentPage === 1) {
        firstBtn.disabled = prevBtn.disabled = true;
      } else {
        firstBtn.disabled = prevBtn.disabled = false;
      }

      if (currentPage === totalPages) {
        nextBtn.disabled = lastBtn.disabled = true;
      } else {
        nextBtn.disabled = lastBtn.disabled = false;
      }
    }
    pageTotal = totalPages;
    pageHeaderSpan.innerHTML = "Page " + currentPage + " of " + totalPages;
    pageEdit.value = pageCurrent = currentPage;
  });

  // Fires every time a grid object is opened in the DOM
  grid.setOpenListener(function(container, dc, gridInstance) {
    $A.remClass(pgn, "hidden");
    pageHeaderSpan.innerHTML = "Page " + pageCurrent + " of " + pageTotal;
  });

  // Fires every time a grid object is closed in the DOM
  grid.setCloseListener(function(container, dc, gridInstance) {
    pageHeaderSpan.innerHTML = "";
    $A.addClass(pgn, "hidden");
  });

  grid.open();

  // Load test records
  var spin = 2;

  for (var tIndex = 1; tIndex <= 1071; tIndex++) {
    // Use the .add() method to import another table row
    grid.add({
      id: tIndex,
      cells: {
        "row-id": {
          readonly: true,
          value: tIndex
        },
        "personal-name": {
          value:
            spin === 2
              ? "Rincewind"
              : spin === 1
              ? "Ponder Stibbons"
              : "Hrun the Barbarian"
        },
        "personal-email": {
          value:
            spin === 2
              ? "wizzard@whatsock.com"
              : spin === 1
              ? "ponder@whatsock.com"
              : "aarg@whatsock.com"
        },
        "personal-city": {
          value: "Ankh-Morpork"
        },
        "personal-university": {
          value: spin === 2 || spin === 1 ? "Unseen University" : "Gruntings"
        },
        "personal-status": {
          type: "toggle",
          name: "Active",
          value: spin === 2 ? false : true
        }
      }
    });

    if (!spin) spin = 2;
    else spin -= 1;

    if (tIndex === 10)
      // Render the first page and load all other records in the background
      grid.openPage(1);
  }

  // Set pagination bindings
  $A.on("button.paginate", "click", function(ev) {
    var o = this,
      open = false;

    if (o.id === "btnFirst" && pageCurrent > 1) {
      grid.firstPage();
      open = true;
    } else if (o.id === "btnPrev" && pageCurrent > 1) {
      grid.prevPage();
      open = true;
    } else if (o.id === "btnNext" && pageCurrent < pageTotal) {
      grid.nextPage();
      open = true;
    } else if (o.id === "btnLast" && pageCurrent < pageTotal) {
      grid.lastPage();
      open = true;
    } else if (o.id === "btnGo") {
      var val = Math.floor(pageEdit.value);

      if (val > 0 && val <= pageTotal && val !== pageCurrent) {
        grid.openPage(val);
        open = true;
      } else pageEdit.value = pageCurrent;
    }

    if (open) {
      $A.announce("Page " + pageCurrent);
      grid.focus();
    }
    ev.preventDefault();
  });
  $A.on(pageEdit, "keydown", function(ev) {
    var k = $A.keyEvent(ev);

    if (k === 13) {
      $A.trigger("#btnGo", "click");
      ev.preventDefault();
    }
  });

  // Configure the checkbox and button bindings to control the grid dynamically
  // click and change events are added to normalize across jQuery, Dojo, and MooTools, and a toggle is set to prevent double exicution

  var isMS = false;
  $A.on("#cbms", "click change", function() {
    // Toggle multiSelect
    var nV = this.checked;

    if (isMS !== nV) {
      isMS = nV;
      grid.setSelect({
        multiSelect: nV
      });

      grid.open(grid.currentPage());
    }
  });

  var isP = false;
  $A.on("#cbp", "click change", function() {
    // Toggle preserve rows
    var nV = this.checked;

    if (isP !== nV) {
      isP = nV;
      grid.setSelect({
        preserve: nV
      });

      grid.open(grid.currentPage());
    }
  });

  var isAS = false;
  $A.on("#cbas", "click change", function() {
    // Toggle the use of aria-selected or offscreen text for selection
    var nV = this.checked;

    if (isAS !== nV) {
      isAS = nV;
      grid.setSelect({
        ariaSelect: nV
      });

      grid.open(grid.currentPage());
    }
  });

  var isD = false;
  $A.on("#cbd", "click change", function() {
    // Toggle whether selected rows can be deleted
    var nV = this.checked;

    if (isD !== nV) {
      isD = nV;
      grid.setDelete({
        enable: nV,
        // Set a function to execute prior to deletion
        beforeRender: function(selectedRowIDs_array) {
          // Return false to cancel deletion
          var i = selectedRowIDs_array.length,
            s = i === 1 ? "" : "s";

          if (i)
            return confirm(
              "Are you sure you want to delete " +
                i +
                " row" +
                s +
                " from the grid?"
            );
          else return false;
        },
        // Set a callback to execute on every row that is deleted
        callback: function(rowObject, gridInstance) {
          // rowObject.id is the table row ID that is being deleted
          // alert(rowObject.id);
          // return false to cancel deletion from the grid
        },
        // Set a function to execute after deletion is completed
        afterRender: function(deletedRowIDs_array) {
          var i = deletedRowIDs_array.length,
            s = i === 1 ? "" : "s";
          alert(i + " row" + s + " deleted");
        }
      });

      $A.get("bd").disabled = nV ? false : true;
      $A.get("bda").disabled = nV ? false : true;
      grid.open(grid.currentPage());
    }
  });

  var isDblC = false;
  $A.on("#cdbl", "click change", function() {
    // Toggle whether double click is used to activate selectable rows and editable cells
    var nV = this.checked;

    if (isDblC !== nV) {
      isDblC = nV;
      grid.useDblClick(nV);
      grid.setAccessibleText({
        dblClickTitle: nV ? "Double click to activate" : "Click to activate"
      });

      grid.open(grid.currentPage());
    }
  });

  // Configure button bindings for modifying the table rows

  $A.on("#bsa", "click", function(ev) {
    // Select All
    grid.selectAll();
    "Selected".announce();
    ev.preventDefault();
  });

  $A.on("#bua", "click", function(ev) {
    // Unselect All
    grid.unselectAll();
    "Unselected".announce();
    ev.preventDefault();
  });

  $A.on("#bs246", "click", function(ev) {
    // Select rows 2, 4, and 6, using their rowObject.id matches
    grid.select([2, 4, 6]);

    "Selected".announce();
    ev.preventDefault();
  });

  $A.on("#bgs", "click", function(ev) {
    // Show the row IDs of all currently selected rows
    var selectedArray = grid.getSelected(),
      str = "The following rowObject IDs are currently selected: ";

    if (!selectedArray.length) str = "No rowObjects are currently selected";
    else
      for (var i = 0; i < selectedArray.length; i++) {
        str += selectedArray[i].id;

        if (i + 1 < selectedArray.length) str += ", ";
      }
    alert(str);
    ev.preventDefault();
  });

  $A.on("#bd", "click", function(ev) {
    // Delete all currently selected rows
    grid.deleteRows();
    // Alternatively, specific rows can be deleted by passing an array of row IDs like so
    // grid.deleteRows(rowIdsArray);
    ev.preventDefault();
  });

  $A.on("#bda", "click", function(ev) {
    // Delete all rows in the grid
    grid.deleteAllRows();
    ev.preventDefault();
  });

  $A.on("#bc", "click", function(ev) {
    // Close the grid
    grid.close();
    "Grid Closed".announce();
    ev.preventDefault();
  });

  $A.on("#bo", "click", function(ev) {
    // Open the grid
    grid.open();
    "Grid Open".announce();
    ev.preventDefault();
  });

  $A.on("#buv", "click", function(ev) {
    // Programmatically update a value anywhere within the grid using it's rowID/colID index
    grid.setValue(5, "personal-email", "HOOAH@whatsock.com");
    "Cell Updated".announce();
    ev.preventDefault();
  });

  var formatStr = function(s, q) {
    var str = "";

    if (typeof s === "number") str = s.toString();
    else str = s;

    var i = str.length,
      aRet = [];

    while (i--) {
      var iC = str[i].charCodeAt();

      if (str[i] !== "\n" && (iC < 65 || iC > 127 || (iC > 90 && iC < 97)))
        aRet[i] = "&#" + iC + ";";
      else aRet[i] = str[i];
    }

    return aRet.join("");
  };
});
