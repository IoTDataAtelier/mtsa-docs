# MTSA Framework Documentation

This is the official documentation website for the MTSA framework. Its purpose is to centralize knowledge and serve as an up-to-date reference guide.

## 🎯 Objective

To maintain clear, comprehensive, and current documentation that serves as the **single source of truth** for using and developing the MTSA framework.

---

## 🚀 Getting Started

Any squad member can (and should) clone this project to preview changes or add new content.

1.  **Clone the Repository**
  ```bash
  # Use the SSH or HTTPS link from the private repository
  git clone https://github.com/IoTDataAtelier/mtsa-website.git
  cd mtsa-website
  ```

2.  **Install Dependencies**
  This project uses Node.js and npm. Run the following command in the project's root directory:
  ```bash
  npm install
  ```

3.  **Run the Development Server**
  This command launches a local server that automatically reloads the page whenever you save a file. The site will be available at `http://localhost:4321`.
  ```bash
  npm run dev
  ```

---

## ✍️ How to Contribute

This is a living document, and contributions from everyone are essential.

> [!WARNING]
> **THE GOLDEN RULE:** Whenever a feature is added, changed, or removed in the `main` branch of the [main MTSA repository](https://github.com/IoTDataAtelier/mtsa), this documentation **MUST** be updated to reflect that change. Keeping the docs in sync is critical.

1.  **Create a New Branch**
  Always start from an up-to-date `main` branch.
  ```bash
  git checkout main
  git pull
  git checkout -b feature/your-feature-name
  ```
  > **Note:** Follow GitFlow best practices when naming branches and writing commit messages.

2.  **Add or Edit Content**
  All documentation content is written in Markdown (`.md`) files located in the `src/content/docs/` directory.

3.  **Commit and Push Your Changes**
  ```bash
  git commit -m "docs: Add documentation for feature X"
  git push -u origin feature/your-feature-name
  ```

4.  **Open a Pull Request (PR)**
  On GitHub, open a Pull Request from your branch to `main` so other team members can review your changes.

---

## 🏗️ Tech Stack & Structure

* **Content:** Located in `src/content/docs/`. The folder structure here directly maps to the site's sidebar navigation.
* **Configuration:** General site settings, such as the title and sidebar structure, are managed in the `astro.config.mjs` file.
* **Technology:** We use [Astro](https://astro.build/) with the [Starlight](https://starlight.astro.build/) template to build this static site.