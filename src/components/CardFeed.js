import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Thumbnail, Icon, Fab, Button } from 'native-base';
import ViewMoreText from 'react-native-view-more-text';
import Moment from 'moment';

renderViewMore = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionPost}>{"view more"}</Text>
  );
}

renderViewLess = (onPress) => {
  return (
    <Text onPress={onPress} style={styles.actionCaptionPost}>{"view less"}</Text>
  );
}

const CardFeed = (props) =>{

  const [active, setActive] = React.useState(false);

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={props.navigateDetail}>
      <View style={styles.sectionUser}>
        <Thumbnail source={props.userImage} style={styles.avatar} />

        <Fab active={active}
            direction="left"
            style={{ backgroundColor: '#57606F', height: '50%', width:"50%", marginLeft: 50}}
            position="bottomRight"
            onPress={() => setActive(!active)}>
            <Icon name="more" />

            <Button style={{ backgroundColor: '#f39c12',marginTop:20, marginLeft: 70,width: "50%", height: "50%" }} onPress={() => props.actionUpdatePost(props.idPost)}>
              <Icon type="MaterialIcons" name="update" />
            </Button>

            <Button style={{ backgroundColor: '#e74c3c', marginTop:20, marginLeft: 85, width: "50%", height: "50%" }} onPress={() => props.actionDeletePost(props.idPost)}>
              <Icon name="trash" />
            </Button>
        </Fab>

        <View style={styles.infoUser}>
          <Text style={styles.nameUser}>{props.userName}</Text>
          <Text style={styles.infoDatePost}>{`${Moment(props.datePost).format('DD MMM YYYY')} at ${Moment(props.datePost).format('HH:mm')}`}</Text>
        </View>
      </View>
      <View style={styles.sectionPost}>
        <ViewMoreText
          numberOfLines={3}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={styles.captionPost}>
          <Text>{props.caption}</Text>
        </ViewMoreText>
        {props.imagePost &&
          <Image source={props.imagePost} style={styles.imagePost} />
        }
      </View>
      <View style={styles.sectionActionFeed}>
        <TouchableOpacity onPress={props.actionComment} style={styles.contentAction}>
          <Icon type="MaterialIcons" name="comment" style={styles.iconAction} />
          <Text style={styles.textAction}>{"Comment"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}


export default CardFeed

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#CED6E0'
  },
  sectionUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 32, height: 32
  },
  infoUser: {
    marginLeft: 12
  },
  nameUser: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542'
  },
  infoDatePost: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#747D8C'
  },
  sectionPost: {
    marginTop: 8,
    marginBottom: 12
  },
  captionPost: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    color: '#2F3542',
    marginBottom: 12
  },
  actionCaptionPost: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#45AAF2',
    marginBottom: 12
  },
  imagePost: {
    width: '100%',
    height: 400,
    borderRadius: 8
  },
  sectionActionFeed: {
    marginHorizontal: 16,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentAction: {
    flexDirection: 'row'
  },
  iconAction: {
    fontSize: 20,
    color: '#57606F',
    marginRight: 4
  },
  textAction: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    lineHeight: 21,
    color: '#57606F'
  }
})
