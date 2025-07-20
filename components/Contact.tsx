const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&rsquo;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I&rsquo;m always open to connecting on data science collaborations, AI and Data Science research, internships, or real-world problem solving. Whether it&rsquo;s a research idea, internship opportunity, or a project that needs intelligent automation &mdash; let&rsquo;s connect and create impact through data!
      </p>

      <a href="mailto:mrhassaniqbal67@gmail.com">
        <button
          className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm 
          text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
        >
          Contact Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
