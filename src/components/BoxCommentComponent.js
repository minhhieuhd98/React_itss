import React, { Component } from "react";

class BoxCommentComponent extends Component {
  render() {
    return (
      <div className="row">
        <div class="col-md-8 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-body">
              <textarea
                placeholder="コメントする..."
                className="form-control"
              ></textarea>
              <form class="form-inline mt-3">
                <button class="btn btn-primary pull-right" type="button">
                  送信
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxCommentComponent;
