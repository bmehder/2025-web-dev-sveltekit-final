<form>
	<div class="form-wrapper">
		<div class="form-item">
			<label for="first">First Name</label>
			<input
				type="text"
				id="first"
				name="first"
				placeholder="Enter first name..."
				required
			/>
		</div>
		<div class="form-item">
			<label for="last">Last Name</label>
			<input
				type="text"
				id="last"
				name="last"
				placeholder="Enter last name..."
				required
			/>
		</div>
		<div class="form-item">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Enter email address..."
				required
			/>
		</div>
		<div class="form-item">
			<label for="tel">Phone (Optional)</label>
			<input type="tel" id="tel" name="tel" placeholder="Enter phone number..." />
		</div>
		<div class="form-item span-2">
			<label for="message">Message</label>
			<textarea name="message" id="message" rows="10"></textarea>
		</div>
		<button type="submit" class="bg-blue white">Submit Message</button>
	</div>
</form>

<style>
	.form-wrapper {
		max-width: 48rem;
		display: grid;
		gap: 1.5rem;

		@media (width > 32rem) {
			grid-template-columns: 1fr 1fr;
			align-items: start;
		}
	}

	.form-item {
		display: grid;
	}

	.span-2 {
		@media (width > 32rem) {
			grid-column: span 2;
		}
	}

	label {
		font-weight: 600;
	}

	input,
	textarea {
		min-width: 0;
		padding: 1rem;
		font: inherit;
	}

	button {
		justify-self: start;
	}

	button:hover {
		background-image: var(--gradient-pink);
	}
</style>
