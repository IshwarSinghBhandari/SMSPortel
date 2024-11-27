import groupModel from "../models/group/model.js";

const deleteLibrary = async (req, res) => {
    const { id } = req.body;
  
    try {
      await libraryModel.findByIdAndDelete(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting library:', error);
      res.status(500).json({ success: false, error: 'Error deleting library' });
    }
  };
  const deleteGroup = async (req, res) => {
    const { id } = req.body;
  
    try {
      await groupModel.findByIdAndDelete(id);
      res.json({ success: true });
    } catch (error) {
      console.error('Error deleting group:', error);
      res.status(500).json({ success: false, error: 'Error deleting group' });
    }
  };

  
  export{
    deleteLibrary,
    deleteGroup
  }