<template>
    <section class="contact-section">
        <div class="contact-intro">
            <h2 class="contact-title">Get in Touch</h2>
            <p class="contact-description">
                Fill out the form below and we'll get back to you as soon as
                possible.
            </p>
        </div>

        <form
            class="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
        >
            <input
                type="hidden"
                name="access_key"
                value="b564b69f-d1d1-4cf0-a79a-4eba504e7f72"
            />
            <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission from Web3Forms"
            />
            <input type="hidden" name="from_name" value="My Website" />
            <!-- More custom ization options available in the docs: https://docs.web3forms.com -->

            <div class="form-group-container">
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        class="form-input"
                        placeholder="Your name"
                        type="text"
                    />
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        class="form-input"
                        placeholder="Your email"
                        type="email"
                    />
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Message</label>
                    <textarea
                        class="form-textarea"
                        id="message"
                        name="message"
                        placeholder="Your message"
                    ></textarea>
                </div>
            </div>
            <button class="form-submit" type="submit">Send Message</button>
        </form>
    </section>
</template>

<style scoped>
.contact-section {
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1rem;
}

.contact-intro > * + * {
    margin-top: 1rem;
}

.contact-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
}

.contact-description {
    color: rgb(107 114 128);
}

.form-group-container {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    display: flex;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: transparent;
}

.form-textarea:focus-visible {
    color: rgb(60, 60, 67);
}

.dark .form-textarea:focus-visible {
    color: rgba(255, 255, 245, 0.86);
}

.form-input:focus-visible,
.form-textarea:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}

.form-textarea {
    min-height: 120px;
}

.form-submit {
    width: 100%;
    margin-top: 1.2rem;
    background-color: #3124ca;
    color: #fff;
    padding: 13px 5px;
    border-radius: 0.375rem;
}
</style>
