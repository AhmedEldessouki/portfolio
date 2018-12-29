import React, { Component } from "react";
import "./Thumb.scss";

import {
  CLOUDINARY_DELETE_URL,
  CLOUDINARY_API_KEY
} from "../../../../Config/CloudInary";
import PropTypes from "prop-types";
import {BarLoader} from "react-spinners";

class Thumb extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.state = {
      Spinner: true,
      thumb: undefined,
      fileName: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log("here");
    // console.log(this.props);
    if (!nextProps.file) {
      return;
    }

    this.setState({ Spinner: true }, () => {
      this.setState({
        Spinner: false,
        thumb: nextProps.file.url,
        fileName: nextProps.file.original_filename,
        // deleteToken: nextProps.file.delete_token,
        file: nextProps.file
      });
    });
  }

  handleDeleteClick() {
    this.setState({ Spinner: true });
    this.handleImagesChange(this.state.file);
  }

  handleImagesChange(file) {
    if (file) {
      this.props.onUploadImages(file);
    }
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.file) {
      this.setState({ Spinner: true }, () => {
        this.setState({
          Spinner: false,
          thumb: this.props.file.url,
          fileName: this.props.file.original_filename,
          // deleteToken: this.props.file.delete_token,
          file: this.props.file
        });
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      spinner: false,
      thumb: null,
      fileName: null
    });
  }

  render() {
    // console.log(this.props);
    const { file } = this.props;
    // const {loading, thumb, fileName} = this.state;
    const { thumb, fileName, spinner } = this.state;
    if (!file) {
      return null;
    }

    if (spinner) {
      return <BarLoader
        className="my-spinner"
        sizeUnit={"px"}
        size={150}
        color={'#d4dff6'}
        loading={spinner}
      />;
    }
    return (
      <div className="Thumb">
        {this.state.thumb ? (
          <div>
            <button
              type="button"
              className="close-button"
              onClick={this.handleDeleteClick}
            />
            <img
              src={thumb}
              alt={fileName}
              className="img-thumbnail mt-2"
              height={100}
              width={200}
            />
          </div>
        ) : (
          <BarLoader
            className="my-spinner"
            sizeUnit={"px"}
            size={150}
            color={'#d4dff6'}
            loading={spinner}
          />
        )}
      </div>
    );
  }
}

Thumb.propTypes = {
  onUploadImages: PropTypes.func
};
export default Thumb;
