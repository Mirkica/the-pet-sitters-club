import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["formContainer", "toggleButton"];

  toggle() {
    if (
      this.formContainerTarget.style.display === "none" ||
      this.formContainerTarget.style.display === ""
    ) {
      this.formContainerTarget.style.display = "block";
      this.toggleButtonTarget.textContent = "Cancel";
    } else {
      this.formContainerTarget.style.display = "none";
      this.toggleButtonTarget.textContent = "Add a New Pet";
    }
  }
}
