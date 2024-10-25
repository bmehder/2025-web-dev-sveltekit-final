{#snippet formItem(type, name, label, placeholder, isRequired = true)}
  <div class="form-item">
    <label for="{name}">{label}</label>
    <input
      {type}
      id="{name}"
      {name}
      {placeholder}
      required={isRequired}
    />
  </div>
{/snippet}

<form>
	<div class="form-wrapper">
    {@render formItem('text', 'first', 'First Name', 'Enter first name...')}
    {@render formItem('text', 'last', 'Last Name', 'Enter last name...')}
    {@render formItem('email', 'email', 'Email Address', 'Enter email address...')}
    {@render formItem('tel', 'tel', 'Phone (Optional)', 'Enter phone number...', false)}

		<div class="form-item span-2">
			<label for="message">Message</label>
			<textarea
				name="message"
				id="message"
				rows="10"
				placeholder="Enter message..."></textarea>
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
