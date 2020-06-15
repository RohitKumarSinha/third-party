class UI {
	constructor() {
		this.profile = document.getElementById('profile');
	}

	// Display profile in UI
	showProfile(user) {
		this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.place.image}">
          </div>
            <ul class="list-group">
              <li class="list-group-item">name: ${user.place.name}</li>
              <li class="list-group-item">detail: ${user.place.detail}</li>
              <li class="list-group-item">Location: ${user.place.location}</li>
            </ul>
          </div>
        </div>
      </div>
     
    `;
	}

	// Show alert message
	showAlert(message, className) {
		// Clear any remaining alerts
		this.clearAlert();
		// Create div
		const div = document.createElement('div');
		// Add classes
		div.className = className;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get parent
		const container = document.querySelector('.searchContainer');
		// Get search box
		const search = document.querySelector('.search');
		// Insert alert
		container.insertBefore(div, search);

		// Timeout after 3 sec
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	// Clear alert message
	clearAlert() {
		const currentAlert = document.querySelector('.alert');

		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// Clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}
