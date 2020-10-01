import '../../node_modules/@polymer/polymer/polymer-legacy.js';
import moment from '../../node_modules/moment/src/moment.js'
/**
 * Behavior that enables the owner filter behavior for lists.
 *
 * @polymerBehavior
 */
export const mistLogsBehavior = {
    properties: {},
    _getVisibleColumns: function() {
        return ['type', 'action', 'user_id']
    },

    _getFrozenLogColumn: function() {
        return ['time']
    },
    _getRenderers: function() {
        var _this = this;
        return {
            'time': {
                'body': function(item, row) {
                    var ret = '<span title="' + moment(item * 1000).format() + '">' + moment(item *
                        1000).fromNow() + '</span>';
                    if (row.error)
                        ret += '<iron-icon icon="error" style="float: right"></iron-icon>';
                    return ret;
                }
            },
            'user_id': {
                'title': function() {
                    return 'user';
                },
                'body': function(item) {
                    if (_this.model && _this.model.members && item in _this.model.members &&
                        _this.model.members[item] && _this.model.members[item].name &&
                        _this.model.members[item].name != undefined) {
                        var displayUser = _this.model.members[item].name || _this.model.members[item].email || _this.model.members[item].username;
                        var ret = '<a href="/members/' + item + '">' + displayUser +
                            '</a>';
                        return ret;
                    }
                    return item || '';
                }
            }
        }
    },
};
