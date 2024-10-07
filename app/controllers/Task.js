const Taskdata = require('../model/Task')



exports.createblog = async (req, res) => {
    try {
      const {Title,Heading,paragraph,lines} = req.body;
      const img = req.file;
      if (!Title || !Heading || !paragraph ) {
        return res.status(400).json({ Status: false, message: 'Please Fill All The Fields' });
      }
      let Lines;
      try {
        Lines = JSON.parse(lines);
      } catch (err) {
        return res.status(400).json({ Status: false, message: 'Invalid lines format' });
      }
        if (!Lines ) {
        return res.status(400).json({ Status: false, message: 'Please provide at least one line with value' });
      }
        const task = new Taskdata({
          Title: Title,
          Heading: Heading,
          paragraph: paragraph,
          image: img.filename,
          lines:Lines
        });
        await task.save();
        console.log(task)
        return res.status(201).json({Status: true,message: 'Blog created successfully',blog: task});
    
      } catch (err) {
        console.error(err);
        return res.status(500).json({ Status: false, message: 'Something went wrong' });
      }
    };


exports.Deleteblog = async (req, res) => {
try {
    const {blog_id} = req.body;
    const taskdata = await Taskdata.findOneAndDelete({ _id:blog_id},{ new: true });
      if (!taskdata) {
          res.status(404).send({ message: `Task not found.` });
      } else {
        return res.status(200).send({ Status:true,message: "BlogTask Deleted Successfully.", taskdata });
      }
  } catch (error) {
      console.log('Error:', error);
      res.status(500).send({ message: "Something went wrong", error });
  }
};


