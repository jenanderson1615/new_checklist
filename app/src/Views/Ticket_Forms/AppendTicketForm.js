import React from "react";

const AppendTicketForm = () => {
    return (
      <div>
          <form onSubmit={() => handleAppend()}>
            <div>Append to Ticket</div>
            <label>
              <div>Ticket Number</div>
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit Ticket Number" />
          </form>
      </div>
    );
  };

  const handleAppend = event => {
    alert("A ticket was appended");
    event.preventDefault();
  };

  export default AppendTicketForm;